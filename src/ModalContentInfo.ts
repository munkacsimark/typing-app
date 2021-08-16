type ModalContentInfo = {
	// translationFunctionName is the translation's function name,
	// to be able to call it like: $LL[name]()
	// hacky AF :')
	translationFunctionName: string;
	component: any;
};

export default ModalContentInfo;
