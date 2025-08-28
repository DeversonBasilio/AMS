import { Get, Route } from 'tsoa';

interface ApiResponse {
  message: string;
}

@Route('/api')
export default class ApiController {

  @Get('/')
  public async getMessage(): Promise<ApiResponse> {
    return { message: 'Hello World!' };
  }

}
