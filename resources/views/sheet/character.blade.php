@extends('layouts.main')

@section('content')

<script type="text/javascript">
    var charId = '{{$char_id}}';
    SystemJS.import('sheets/character/charmain');
</script>

<character-sheet [character]="charId"></character-sheet>

@endsection