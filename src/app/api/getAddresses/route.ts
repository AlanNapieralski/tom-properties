import { NextRequest } from "next/server"

interface PlaceResult {
    formatted_address: string;
    place_id: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
    name: string;
}

interface GooglePlacesAPIResponse {
    results: PlaceResult[];
    status: string;
}

const POST = async (req: NextRequest) => {
    try {
        const { textQuery } = await req.json();

        if (!textQuery) {
            return Response.json({ error: 'Missing textQuery parameter' }, { status: 400 });
        }

        const API_KEY = process.env.PLACES_API_KEY;

        if (!API_KEY) {
            return Response.json({ error: 'API key is missing' }, { status: 500 });
        }

        const endpoint: string = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(textQuery)}&key=${API_KEY}`;

        const res: Response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            return Response.json({ error: errorData }, { status: res.status });
        }

        const data: GooglePlacesAPIResponse = await res.json();
        const formattedData = data.results.map(result => result.formatted_address)
        return Response.json(formattedData);

    } catch (error: unknown) {
        let errorMessage = 'An unknown error occurred';

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return Response.json(
            { error: 'Something went wrong', details: errorMessage },
            { status: 500 }
        );
    }
};

export { POST };
