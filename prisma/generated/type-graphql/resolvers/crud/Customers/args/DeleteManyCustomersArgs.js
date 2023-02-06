"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersWhereInput_1 = require("../../../inputs/CustomersWhereInput");
let DeleteManyCustomersArgs = class DeleteManyCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereInput_1.CustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereInput_1.CustomersWhereInput)
], DeleteManyCustomersArgs.prototype, "where", void 0);
DeleteManyCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCustomersArgs);
exports.DeleteManyCustomersArgs = DeleteManyCustomersArgs;
