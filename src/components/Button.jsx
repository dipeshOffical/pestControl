
function Button({style,text}) {
  return (
    <div className={'px-6 py-2 rounded-md ' + style}>
        {text}
    </div>
  )
}

export default Button