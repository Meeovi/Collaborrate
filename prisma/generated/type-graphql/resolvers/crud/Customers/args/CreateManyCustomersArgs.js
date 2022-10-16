"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateManyInput_1 = require("../../../inputs/CustomersCreateManyInput");
let CreateManyCustomersArgs = class CreateManyCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersCreateManyInput_1.CustomersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCustomersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCustomersArgs.prototype, "skipDuplicates", void 0);
CreateManyCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCustomersArgs);
exports.CreateManyCustomersArgs = CreateManyCustomersArgs;
