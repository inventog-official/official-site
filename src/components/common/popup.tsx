import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';

type Props = {
	children: any;
	height?: any;
	width?: any;
	ref?: any;
	onClose: () => void;
	onCancel?: () => void;
	closeButton?: boolean;
	className?: string;
	loading?: boolean;
};

export const Popup = ({
	ref,
	height,
	width,
	children,
	onClose,
	onCancel,
	closeButton = false,
	className = '',
	loading = false,
}: Props): React.ReactPortal | null => {
	return ReactDOM.createPortal(
		<div
			ref={loading === false ? ref : null}
			className="fixed inset-0 h-screen top-0 flex items-center justify-center  scrollbar overflow-y-auto z-100"
			style={{
				background: 'rgba(0, 0, 0, 0.62)',
				zIndex: 1002,
			}}
		>
			<motion.div
				className={`relative  bg-white w-full  md:top-0 top-0 min-h-100px md:min-h-200px ${className}`}
				style={{
					height,
					width,
				}}
				onClick={(e) => e.stopPropagation()}
				
			>
				{closeButton ? (
					<button
						className={`absolute z-50 top-3 right-3 p-2 rounded-full hover:bg-hoverLight ${loading ? 'hidden' : 'visible'}`}
						onClick={() => {
							onClose();
							onCancel && onCancel();
						}}
					>
						<MdClose className="text-primary h-6 w-6" />
					</button>
				) : null}

				<div>{children}</div>
			</motion.div>
		</div>,
		document.getElementById('popup') as HTMLElement
	);
};