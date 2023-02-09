"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesUpdateManyMutationInput_1 = require("../../../inputs/PagesUpdateManyMutationInput");
const PagesWhereInput_1 = require("../../../inputs/PagesWhereInput");
let UpdateManyPagesArgs = class UpdateManyPagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateManyMutationInput_1.PagesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesUpdateManyMutationInput_1.PagesUpdateManyMutationInput)
], UpdateManyPagesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], UpdateManyPagesArgs.prototype, "where", void 0);
UpdateManyPagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPagesArgs);
exports.UpdateManyPagesArgs = UpdateManyPagesArgs;
