"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesCreateManyInput_1 = require("../../../inputs/CategoriesCreateManyInput");
let CreateManyCategoriesArgs = class CreateManyCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesCreateManyInput_1.CategoriesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCategoriesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCategoriesArgs.prototype, "skipDuplicates", void 0);
CreateManyCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCategoriesArgs);
exports.CreateManyCategoriesArgs = CreateManyCategoriesArgs;
