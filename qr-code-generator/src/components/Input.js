export function Input(props) {
    return (
        <input 
            {...props}
            style={props.style}
            type={props.type} 
            onChange={props.onChange}  // ✅ Corrected
        />
    );
}
