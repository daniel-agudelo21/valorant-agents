import Link from 'next/link'

export default function WorkingOn() {
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="text-center p-6 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-yellow-600 mb-4">En construccion</h2>
                <p className="text-lg mb-6">Actualmente estamos trabajando en esta seccion.Por favor revisar luego.</p>
                <Link href="/" className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    Regresar al inicio
                </Link>
            </div>
        </div>
    )
}
