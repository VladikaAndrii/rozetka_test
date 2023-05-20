from django.core.mail import EmailMessage


class Mailer:
    @staticmethod
    def send_confirmation_email_to_user(data):
        email = EmailMessage(subject=data["email_subject"], body=data["email_body"], to=[data["email_to"]])
        email.send()
