"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesWhereInput_1 = require("../../../inputs/CategoriesWhereInput");
let DeleteManyCategoriesArgs = class DeleteManyCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereInput_1.CategoriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesWhereInput_1.CategoriesWhereInput)
], DeleteManyCategoriesArgs.prototype, "where", void 0);
DeleteManyCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCategoriesArgs);
exports.DeleteManyCategoriesArgs = DeleteManyCategoriesArgs;
