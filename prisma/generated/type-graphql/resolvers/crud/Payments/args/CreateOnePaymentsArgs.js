"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsCreateInput_1 = require("../../../inputs/PaymentsCreateInput");
let CreateOnePaymentsArgs = class CreateOnePaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsCreateInput_1.PaymentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsCreateInput_1.PaymentsCreateInput)
], CreateOnePaymentsArgs.prototype, "data", void 0);
CreateOnePaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePaymentsArgs);
exports.CreateOnePaymentsArgs = CreateOnePaymentsArgs;
