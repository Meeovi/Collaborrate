"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryCreateManyInput_1 = require("../../../inputs/Tax_categoryCreateManyInput");
let CreateManyTax_categoryArgs = class CreateManyTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryCreateManyInput_1.Tax_categoryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTax_categoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTax_categoryArgs.prototype, "skipDuplicates", void 0);
CreateManyTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTax_categoryArgs);
exports.CreateManyTax_categoryArgs = CreateManyTax_categoryArgs;
