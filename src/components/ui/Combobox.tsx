"use client"

import * as React from "react"
import { FaCaretDown } from "react-icons/fa"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { Path } from "react-hook-form"

export type ComboboxItem = {
  value: string
  label: string
}

type ComboboxProps<TFieldValues extends FieldValues = FieldValues> = {
  label: string
  searchPlaceholder?: string
  itemIdentifier?: string
  items: ComboboxItem[]
  className?: string
  field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>
}

export function Combobox<TFieldValues extends FieldValues>({
  className = '',
  label,
  searchPlaceholder,
  itemIdentifier,
  items,
  field,
}: ComboboxProps<TFieldValues>) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('min-w-[200px]', className)}
        >
          <span className="truncate">
            {field.value
              ? items.find((item) => item.value === field.value)?.label
              : label}
          </span>
          <FaCaretDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-72 sm:max-w-[360px] lg:max-w-[586px]">
        <Command className="">
          {searchPlaceholder && <CommandInput placeholder={searchPlaceholder} />}
          <CommandList>
            {searchPlaceholder && <CommandEmpty>No {itemIdentifier} found.</CommandEmpty>}
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => {
                    field.onChange(item.value)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

