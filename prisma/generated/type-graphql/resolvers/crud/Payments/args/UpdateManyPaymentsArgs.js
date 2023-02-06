"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsUpdateManyMutationInput_1 = require("../../../inputs/PaymentsUpdateManyMutationInput");
const PaymentsWhereInput_1 = require("../../../inputs/PaymentsWhereInput");
let UpdateManyPaymentsArgs = class UpdateManyPaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsUpdateManyMutationInput_1.PaymentsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsUpdateManyMutationInput_1.PaymentsUpdateManyMutationInput)
], UpdateManyPaymentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereInput_1.PaymentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereInput_1.PaymentsWhereInput)
], UpdateManyPaymentsArgs.prototype, "where", void 0);
UpdateManyPaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPaymentsArgs);
exports.UpdateManyPaymentsArgs = UpdateManyPaymentsArgs;
