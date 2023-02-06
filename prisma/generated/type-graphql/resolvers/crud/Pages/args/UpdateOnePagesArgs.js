"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesUpdateInput_1 = require("../../../inputs/PagesUpdateInput");
const PagesWhereUniqueInput_1 = require("../../../inputs/PagesWhereUniqueInput");
let UpdateOnePagesArgs = class UpdateOnePagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateInput_1.PagesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesUpdateInput_1.PagesUpdateInput)
], UpdateOnePagesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], UpdateOnePagesArgs.prototype, "where", void 0);
UpdateOnePagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePagesArgs);
exports.UpdateOnePagesArgs = UpdateOnePagesArgs;
