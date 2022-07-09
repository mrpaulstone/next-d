/* Amplify Params - DO NOT EDIT
	API_NEXTD_GRAPHQLAPIENDPOINTOUTPUT
	API_NEXTD_GRAPHQLAPIIDOUTPUT
	API_NEXTD_GRAPHQLAPIKEYOUTPUT
	API_NEXTD_POSTTABLE_ARN
	API_NEXTD_POSTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda! stuff and things'),
    };
};
