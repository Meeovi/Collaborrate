"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsCreateManyInput_1 = require("../../../inputs/PaymentsCreateManyInput");
let CreateManyPaymentsArgs = class CreateManyPaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsCreateManyInput_1.PaymentsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPaymentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPaymentsArgs.prototype, "skipDuplicates", void 0);
CreateManyPaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPaymentsArgs);
exports.CreateManyPaymentsArgs = CreateManyPaymentsArgs;
