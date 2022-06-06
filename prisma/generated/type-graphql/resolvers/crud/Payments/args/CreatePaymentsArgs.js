"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsCreateInput_1 = require("../../../inputs/PaymentsCreateInput");
let CreatePaymentsArgs = class CreatePaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsCreateInput_1.PaymentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsCreateInput_1.PaymentsCreateInput)
], CreatePaymentsArgs.prototype, "data", void 0);
CreatePaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreatePaymentsArgs);
exports.CreatePaymentsArgs = CreatePaymentsArgs;
