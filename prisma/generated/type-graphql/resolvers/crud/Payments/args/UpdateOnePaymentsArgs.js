"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsUpdateInput_1 = require("../../../inputs/PaymentsUpdateInput");
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
let UpdateOnePaymentsArgs = class UpdateOnePaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsUpdateInput_1.PaymentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsUpdateInput_1.PaymentsUpdateInput)
], UpdateOnePaymentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], UpdateOnePaymentsArgs.prototype, "where", void 0);
UpdateOnePaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePaymentsArgs);
exports.UpdateOnePaymentsArgs = UpdateOnePaymentsArgs;
