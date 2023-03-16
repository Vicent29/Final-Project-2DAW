from django.apps import AppConfig


class StationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'src.apps.station'

    def ready(self):
        import src.apps.station.signals
