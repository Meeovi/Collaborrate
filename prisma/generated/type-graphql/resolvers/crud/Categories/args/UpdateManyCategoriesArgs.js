"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesUpdateManyMutationInput_1 = require("../../../inputs/CategoriesUpdateManyMutationInput");
const CategoriesWhereInput_1 = require("../../../inputs/CategoriesWhereInput");
let UpdateManyCategoriesArgs = class UpdateManyCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesUpdateManyMutationInput_1.CategoriesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesUpdateManyMutationInput_1.CategoriesUpdateManyMutationInput)
], UpdateManyCategoriesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereInput_1.CategoriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesWhereInput_1.CategoriesWhereInput)
], UpdateManyCategoriesArgs.prototype, "where", void 0);
UpdateManyCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCategoriesArgs);
exports.UpdateManyCategoriesArgs = UpdateManyCategoriesArgs;
