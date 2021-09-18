export const reducer = (reducer) => {
	return {
    error : reducer.getImage.error,
    response : reducer.getImage.predict,
    box : reducer.getBoxBorders.box,
    feeling: reducer.getBoxBorders.feeling,
    age : reducer.getBoxBorders.age,
    gender : reducer.getBoxBorders.gender,
    route : reducer.getRoute.route,
    signInEmail : reducer.getSignIn.email,
    signInPassword : reducer.getSignIn.password,
    failedServer : reducer.compareUserResults.failed,
    user : JSON.parse(window.localStorage.getItem('user')),
    registerEmail : reducer.signNewUser.email,
    registerPassword : reducer.signNewUser.password,
    registerName : reducer.signNewUser.name,
    remove : reducer.getRemoveState.remove,
    verifyFailed: reducer.codeVerification.verifyFailed,
    imagePath: reducer.deviceImage.image,
    imageName: reducer.deviceImage.imageName
	}
}