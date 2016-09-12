@extends('layouts.main')

@section('content')

<script type="text/javascript">
    SystemJS.import('sheets/character/charmain');
</script>

<character-sheet></character-sheet>

@endsection