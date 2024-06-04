export function ImageOverlay(){
    return (
        <div className="w-100 h-100 position-absolute" style={{
            top:0, left:0,
            backgroundColor: 'black',
            opacity: 0.2,
            zIndex: 0,
        }}>
        </div>
    )
}