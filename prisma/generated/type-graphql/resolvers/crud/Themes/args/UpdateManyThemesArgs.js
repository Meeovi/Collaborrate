"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesUpdateManyMutationInput_1 = require("../../../inputs/ThemesUpdateManyMutationInput");
const ThemesWhereInput_1 = require("../../../inputs/ThemesWhereInput");
let UpdateManyThemesArgs = class UpdateManyThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesUpdateManyMutationInput_1.ThemesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesUpdateManyMutationInput_1.ThemesUpdateManyMutationInput)
], UpdateManyThemesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereInput_1.ThemesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereInput_1.ThemesWhereInput)
], UpdateManyThemesArgs.prototype, "where", void 0);
UpdateManyThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyThemesArgs);
exports.UpdateManyThemesArgs = UpdateManyThemesArgs;
