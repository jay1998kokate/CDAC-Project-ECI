const InputComponent = ({input, register, errors}) => {
    return (
        <div className="row px-3">
        <label className="mb-1">
          <h6 className="mb-0 text-sm">{input.label}</h6>
        </label>
        <input
          className="mb-1"
          type={input.type}
          placeholder={input.placeholder}
          {...register(input.name)}
        />
        <label className="errorMessages mb-3">{errors[input.name]?.message}</label>
      </div>
    )
}

export default InputComponent;