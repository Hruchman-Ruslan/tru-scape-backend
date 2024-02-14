import { Controller, Get } from '@nestjs/common';
import { SummarySalesService } from 'src/services';

@Controller('summary-sales')
export class SummarySalesController {
  constructor(private summarySalesService: SummarySalesService) {}

  @Get()
  getSummarySales() {
    return this.summarySalesService.getSummarySales();
  }
}
