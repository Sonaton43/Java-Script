let form = document.getElementById('form');
        let username = document.getElementById('username');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let repassword = document.getElementById('repassword');

        form.addEventListener('submit',(e) => {
            e.preventDefault();
            checkInputs();
        });

        function checkInputs(){
            let usernameValue = username.value.trim();
            let emailValue = email.value.trim();
            let passwordValue = password.value.trim();
            let repasswordValue = repassword.value.trim();

            if(usernameValue === ''){
                setErrorFor(username,'Error');
            }else{
                setSuccessFor(username);
            }

            if(emailValue === ''){
                setErrorFor(email,'Blank');
            }else if(!isEmail(emailValue)){
                setErrorFor(email,'invalid');
            }else{
                setSuccessFor(email);
            }

            if(passwordValue === ''){
                setErrorFor(password,'Blank');
            }else if(!isPassword(passwordValue)){
                setErrorFor(password,'invalid');
            }else{
                setSuccessFor(password);
            }

            if(repasswordValue === ''){
                setErrorFor(repassword,'Blank');
            }else if(passwordValue !== repasswordValue){
                setErrorFor(repassword,'invalid');
            }else{
                setSuccessFor(repassword);
            }
        }

        function setErrorFor(input, massage){
            let formControl = input.parentElement;
            let small = formControl.querySelector('small');
            small.innerText = massage;
            formControl.className = 'form-control error';
        }

        function setSuccessFor(input){
            let formControl = input.parentElement;
            formControl.className = 'form-control success'
        }
        function isEmail(email){
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ .test(email);
        }

        function isPassword(password){
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ .test(password);
        }