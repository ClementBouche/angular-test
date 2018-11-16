import { FormControl, AbstractControl } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { ImgHelperService } from "../../../shared/http/img-helper.service";

export class TicketValidator {

    static URL_REGEXP = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    static url(control: FormControl) {
        if (TicketValidator.URL_REGEXP.test(control.value)) {
            return null;
        }
        return {
            url: {
                reason: 'Ne correspond pas à une adresse web',
                invalid: true
            }
        }
    }

    static createResourceValidator(imgHelperService: ImgHelperService) {
        return (control: AbstractControl) => {
            return imgHelperService.checkImg(control.value).then((response) => {
                if (response) {
                    return null;
                }
                return {
                    resource: {
                        reason: 'Pas de ressource ou d\'image à l\'adresse proposée',
                        invalid: true
                    }
                };
            });
        };
    }

    static createResourceValidatorDebounce(imgHelperService: ImgHelperService) {
        return (control: AbstractControl) => {
            return imgHelperService.checkImgObservable(control.value).then((response) => {
                console.log('response', response);
                if (response) {
                    console.log('success');
                    return null;
                }
                console.log('error');
                return {
                    resource: {
                        reason: 'Pas de ressource ou d\'image à l\'adresse proposée',
                        invalid: true
                    }
                };
            });
        };
    }

    static createResourceValidatorDebouncev2(imgHelperService: ImgHelperService) {
        return (control: AbstractControl) => {
            return Observable.create()
                .pipe(timer(500))
                .toPromise(() => {
                    return imgHelperService.checkImgObservable(control.value).then((response) => {
                        console.log('response', response);
                        if (response) {
                            console.log('success');
                            return null;
                        }
                        console.log('error');
                        return {
                            resource: {
                                reason: 'Pas de ressource ou d\'image à l\'adresse proposée',
                                invalid: true
                            }
                        };
                    });
                });
        };
    }

    static createResourceValidatorDebouncev3(imgHelperService: ImgHelperService, emailTimeout) {
        return (control: AbstractControl) => {
            if (emailTimeout) {
                clearTimeout(emailTimeout);
            }
            return new Promise((resolve, reject) => {
                emailTimeout = setTimeout(() => {
                    return imgHelperService.checkImgObservable(control.value).then((response) => {
                        console.log('response', response);
                        if (response) {
                            console.log('success');
                            resolve(null);
                        }
                        console.log('error');
                        resolve({
                            resource: {
                                reason: 'Pas de ressource ou d\'image à l\'adresse proposée',
                                invalid: true
                            }
                        });
                    });
                }, 500);
            });
        };
    }

}
