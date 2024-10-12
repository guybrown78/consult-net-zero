import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className = '',
}: {
	id:string,
  label:string,
  type?: 'text' | "email" | "phone",
  className?: string
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} className={formClasses} />
    </div>
  )
}


export function TextAreaField({ 
	id, 
	label, 
	className = '', 
	rows = 4, 
	...props
}: {
	id:string,
  label:string,
  className?: string
	rows?: number
}){
	return (
		<div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <textarea
        id={id} rows={rows} className={formClasses}
      />
    </div>
	)
}