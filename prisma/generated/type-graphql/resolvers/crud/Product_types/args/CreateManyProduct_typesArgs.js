"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesCreateManyInput_1 = require("../../../inputs/Product_typesCreateManyInput");
let CreateManyProduct_typesArgs = class CreateManyProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesCreateManyInput_1.Product_typesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProduct_typesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyProduct_typesArgs.prototype, "skipDuplicates", void 0);
CreateManyProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProduct_typesArgs);
exports.CreateManyProduct_typesArgs = CreateManyProduct_typesArgs;
