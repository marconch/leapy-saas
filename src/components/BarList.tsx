"use client"

import * as React from "react"
import { cn, cx } from "@/lib/utils"

interface BarListItem {
  key?: string
  name: string
  value: number
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  color?: string
}

interface BarListProps extends React.HTMLAttributes<HTMLDivElement> {
  data: BarListItem[]
  showAnimation?: boolean
  sortOrder?: "ascending" | "descending" | "none"
  color?: string
}

function BarList({
  data = [],
  showAnimation = true,
  sortOrder = "descending",
  color = "blue",
  className,
  ...props
}: BarListProps) {
  const Component = "div"

  const sortedData = React.useMemo(() => {
    if (sortOrder === "none") {
      return data
    }
    return [...data].sort((a, b) => {
      return sortOrder === "ascending" ? a.value - b.value : b.value - a.value
    })
  }, [data, sortOrder])

  const maxValue = React.useMemo(() => {
    return Math.max(...sortedData.map((item) => item.value), 0)
  }, [sortedData])

  const BarListItem = ({
    item,
    maxValue,
  }: {
    item: BarListItem
    maxValue: number
  }) => {
    const {
      key,
      name,
      value,
      icon: Icon,
      href,
      color: itemColor = color,
    } = item

    const hasHref = !!href
    const Component = hasHref ? "a" : "div"

    return (
      <Component
        key={key ?? name}
        href={href}
        className={cx(
          // base
          "group block w-full rounded border-l-2 border-l-transparent p-4",
          // hover
          hasHref &&
            "cursor-pointer hover:border-l-gray-400 hover:bg-gray-50 dark:hover:border-l-gray-600 dark:hover:bg-gray-900",
        )}
      >
        <div className="flex items-center justify-between space-x-6">
          <div className="flex items-center space-x-2.5 truncate">
            {Icon ? (
              <Icon
                className={cx(
                  // base
                  "size-5 shrink-0",
                  // text color
                  "text-gray-400 dark:text-gray-600",
                  // hover text color
                  hasHref &&
                    "group-hover:text-gray-500 dark:group-hover:text-gray-500",
                )}
              />
            ) : null}
            <p
              className={cx(
                // base
                "truncate text-sm font-medium",
                // text color
                "text-gray-900 dark:text-gray-50",
                // hover text color
                hasHref &&
                  "group-hover:text-gray-900 dark:group-hover:text-gray-50",
              )}
            >
              {name}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p
              className={cx(
                // base
                "text-sm font-medium tabular-nums",
                // text color
                "text-gray-900 dark:text-gray-50",
              )}
            >
              {Intl.NumberFormat("en-US").format(value)}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <div
            className={cx(
              // base
              "h-2 w-full rounded-full",
              // background color
              "bg-gray-200 dark:bg-gray-800",
            )}
          >
            <div
              className={cx(
                // base
                "h-2 rounded-full",
                // background color
                getColorClassName(itemColor, "bg"),
                // transitions
                showAnimation && "transition-all duration-700 ease-in-out",
              )}
              style={{
                width: maxValue !== 0 ? `${(value / maxValue) * 100}%` : "0%",
              }}
            />
          </div>
        </div>
      </Component>
    )
  }

  return (
    <Component className={cn("space-y-1.5", className)} {...props}>
      {sortedData.map((item, index) => (
        <BarListItem
          key={item.key ?? `${item.name}-${index}`}
          item={item}
          maxValue={maxValue}
        />
      ))}
    </Component>
  )
}

function getColorClassName(color: string, type: "bg" | "text") {
  const colorMap = {
    blue: {
      bg: "bg-blue-500 dark:bg-blue-500",
      text: "text-blue-500 dark:text-blue-500",
    },
    emerald: {
      bg: "bg-emerald-500 dark:bg-emerald-500",
      text: "text-emerald-500 dark:text-emerald-500",
    },
    violet: {
      bg: "bg-violet-500 dark:bg-violet-500",
      text: "text-violet-500 dark:text-violet-500",
    },
    amber: {
      bg: "bg-amber-500 dark:bg-amber-500",
      text: "text-amber-500 dark:text-amber-500",
    },
    gray: {
      bg: "bg-gray-500 dark:bg-gray-500",
      text: "text-gray-500 dark:text-gray-500",
    },
    rose: {
      bg: "bg-rose-500 dark:bg-rose-500",
      text: "text-rose-500 dark:text-rose-500",
    },
    indigo: {
      bg: "bg-indigo-500 dark:bg-indigo-500",
      text: "text-indigo-500 dark:text-indigo-500",
    },
  }

  return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.blue[type]
}

export { BarList, type BarListItem }