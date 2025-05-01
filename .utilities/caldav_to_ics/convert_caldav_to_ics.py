import caldav
from icalendar import Calendar
import os
import argparse


def export_calendar(caldav_uri: str, caldav_username: str, caldav_password: str, calendar_name: str, output_file: str):
    export_cal = Calendar()
    export_cal.add('prodid', '-//Mozilla.org/NONSGML Mozilla Calendar V1.1//EN')
    export_cal.add('version', '2.0')

    client = caldav.DAVClient(url=caldav_uri, username=caldav_username, password=caldav_password)
    principal = client.principal()
    imported_calendar = principal.calendar(name=calendar_name)
    events = imported_calendar.events()
    print(f'Found {len(events)} calendar events.')

    for import_event in events:
        for subcomponent in import_event.icalendar_instance.subcomponents:
            export_cal.add_component(subcomponent)

    output_folder = 'out'
    output_file = os.path.join(f'{output_folder}/{output_file}.ics')

    os.makedirs(output_folder, exist_ok=True)
    with open(output_file, 'wb') as f:
        export_cal_as_ical = export_cal.to_ical()
        f.write(export_cal_as_ical)

    print(f'Exported calendar events.')


if __name__ == '__main__':
    args = argparse.ArgumentParser(description='Export calendar events to ICS file')
    args.add_argument('caldav_uri', type=str, help='CalDAV URI')
    args.add_argument('caldav_username', type=str, help='CalDAV username')
    args.add_argument('caldav_password', type=str, help='CalDAV password')
    args.add_argument('calendar_name', type=str, help='Calendar name')
    args.add_argument('output_file', type=str, help='Output file name (without extension)')

    args = args.parse_args()

    export_calendar(caldav_uri=args.caldav_uri,
                    caldav_username=args.caldav_username,
                    caldav_password=args.caldav_password,
                    calendar_name=args.calendar_name,
                    output_file=args.output_file)
