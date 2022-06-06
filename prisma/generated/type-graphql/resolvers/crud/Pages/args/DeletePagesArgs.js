"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesWhereUniqueInput_1 = require("../../../inputs/PagesWhereUniqueInput");
let DeletePagesArgs = class DeletePagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], DeletePagesArgs.prototype, "where", void 0);
DeletePagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeletePagesArgs);
exports.DeletePagesArgs = DeletePagesArgs;
