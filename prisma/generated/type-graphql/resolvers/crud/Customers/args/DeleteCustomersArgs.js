"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersWhereUniqueInput_1 = require("../../../inputs/CustomersWhereUniqueInput");
let DeleteCustomersArgs = class DeleteCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], DeleteCustomersArgs.prototype, "where", void 0);
DeleteCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCustomersArgs);
exports.DeleteCustomersArgs = DeleteCustomersArgs;
