import type { Category } from "../../data/categories"

type NavigationBarProps = {
  categories: Category[]
  activeCategory: string
  onCategorySelect: (alias: string) => void
}

export function NavigationBar({
  categories,
  activeCategory,
  onCategorySelect,
}: NavigationBarProps) {
  return (
    <>
      <nav>
        <ul className="container">
          {categories.map((category) => (
            <li>
              <button
                type="button"
                className={
                  activeCategory === category.label ? "active" : undefined
                }
                onClick={() => onCategorySelect(category.alias)}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
