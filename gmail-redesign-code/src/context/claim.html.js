module.exports = `
<head>
    <style type="text/css">
        body {
            color: black;
            font-family: Arial;
            font-size: 10pt;
        }

        .leftalign {
            text-align: left;
        }

        th.section, td.section {
            font-weight: bold;
            font-style: italic;
            font-size: 14pt;
            color: #8e8c8d;
            text-align: left;
        }

        td.bodyprefix {
            text-align: left;
            text-wrap: normal;
        }

        .workflowinfo {
            border-collapse: collapse;
        }

        .subtableheader {
            background-color: #4a6f87;
            color: white;
            font-weight: bold;
            text-align: left;
            border: 1px solid #4a6f87;
        }

        table.workflowinfo td {
            color: black;
            text-align: left;
            border: 1px solid #ddd;
        }

        tr.alternate {
            background-color: #c3c6cd;
        }

        table.main {
            table-layout: fixed;
            width: 100%;
        }

        td.mainColumn {
            text-align: center;
        }

        td.childtableMainColumn {
            width: 350px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <table class="main">
        <tr>
            <td>
                <table class="mainColumnChildTable">
                    <tr>
                        <td class="childtableMainColumn">
                            <table cellpadding="5" cellspacing="0" style="table-layout: fixed; width: 100%;">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <!--$$DocLinkButton$$-->
                                            <br />
                                            <br />
                                            <!--$$FileLinkButton$$-->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" />
                                    </tr>
                                    <tr>
                                        <td colspan="2" class=3D"bodyprefix">
                                            Please be advised that the below referenced submission has been received!  While our goal is to process your claim as quickly as possible, we ask that you allow for up to 30 days for us to complete your claim.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" />
                                    </tr>
                                    <tr>
    <td colspan="2">
        <table class="workflowinfo" cellpadding="5" cellspacing="0" style="width: 100%">
            <thead>
                <tr>
                    <th colspan="2" class="subtableheader">
                        <span>
                            File and Document Information
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Service Date</td><td>04/03/2022</td></tr><tr class='alternate'><td>Receipt Date</td><td>04/03/2022</td></tr><tr><td>Confirmation Number</td><td>329845750193</td></tr>
                <!--$$DocumentInformation$$-->
            </tbody>
        </table>
    </td>
</tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
`
