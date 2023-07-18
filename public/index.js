function getSignUpErrorMessage(error) {  
    let errorMessage;
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = '이미 사용 중인 이메일 주소입니다. 다른 계정을 사용해주세요.';
        break;
      case 'auth/invalid-email':
        errorMessage = '올바르지 않은 이메일 주소 형식입니다. 올바른 형식으로 제공해주세요.';
        break;
      case 'auth/operation-not-allowed':
        errorMessage = '이메일 및 비밀번호 인증 방법이 사용 중지되었습니다. 프로젝트 설정에서 이 방법을 활성화해주세요.';
        break;
      case 'auth/weak-password':
        errorMessage = '입력한 비밀번호가 약합니다. 보안을 위해 더 강력한 비밀번호를 선택해주세요.';
        break;
      default:
        errorMessage = '가입 과정에서 문제가 발생했습니다. 다시 시도해주세요.';
    }
    return errorMessage;
  }

  function getLoginErrorMessage(error) {    
    let errorMessage;
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = '올바르지 않은 이메일 주소 형식입니다. 올바른 형식으로 제공해주세요.';
        break;
      case 'auth/user-disabled':
        errorMessage = '사용이 중지된 계정입니다. 관리자에게 문의해주세요.';
        break;
      case 'auth/user-not-found':
        errorMessage = '해당 이메일 주소로 가입된 사용자가 없습니다. 이메일 주소를 다시 확인해주세요.';
        break;
      case 'auth/wrong-password':
        errorMessage = '비밀번호가 잘못되었습니다. 다시 입력해주세요.';
        break;
      default:
        errorMessage = '로그인 과정에서 문제가 발생했습니다. 다시 시도해주세요.';
    }
    return errorMessage;
  }