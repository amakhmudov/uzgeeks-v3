import PropTypes from 'prop-types'

const variantClasses = {
  primary:
    'bg-brand text-white px-8 py-4 rounded-[4px] text-[18px] hover:opacity-90 transition-opacity',
  outline:
    'border border-white text-white px-8 py-[15px] rounded-[4px] text-[18px] hover:bg-white/10 transition-colors',
}

export function Button({
  variant = 'primary',
  as: Tag = 'button',
  href,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag href={href} className={`${variantClasses[variant]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'outline']),
  as: PropTypes.elementType,
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
