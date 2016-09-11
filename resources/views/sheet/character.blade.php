@extends('layouts.main')

@section('content')

<script type="text/javascript">
    SystemJS.import('sheets/character/charmain');
</script>

<div>This is where the character sheet will go.</div>

<character-sheet></character-sheet>

@endsection