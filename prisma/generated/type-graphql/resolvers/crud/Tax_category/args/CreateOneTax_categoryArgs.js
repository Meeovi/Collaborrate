"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryCreateInput_1 = require("../../../inputs/Tax_categoryCreateInput");
let CreateOneTax_categoryArgs = class CreateOneTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryCreateInput_1.Tax_categoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_categoryCreateInput_1.Tax_categoryCreateInput)
], CreateOneTax_categoryArgs.prototype, "data", void 0);
CreateOneTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTax_categoryArgs);
exports.CreateOneTax_categoryArgs = CreateOneTax_categoryArgs;
