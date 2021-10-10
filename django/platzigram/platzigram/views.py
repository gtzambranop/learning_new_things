# Django
from django.http import HttpResponse

# Utilities
from datetime import datetime
import pdb
import json

def hello_world(request):
  return HttpResponse('Current time is {now}'.format(
    now=str(datetime.now().strftime('%b %dth, %Y - %H:%M hrs'))))

def sort_numbers(request):
  numbers = [int(i) for i in request.GET['numbers'].split(',')]
  result = {
    'status': 200,
    'numbers': sorted(numbers),
    'message': 'Integers sorted successfully.'
  }
  return HttpResponse(json.dumps(result, indent=2), content_type='application/json')