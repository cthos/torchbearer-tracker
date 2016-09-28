@extends('layouts.main')

@section('content')

<h2>
    GM Phase Sheet
</h2>

<script type="text/javascript">
    SystemJS.import('sheets/gm/gm_main');
</script>

<gm-sheet></gm-sheet>

@endsection