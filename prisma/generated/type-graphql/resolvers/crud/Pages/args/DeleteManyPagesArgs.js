"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesWhereInput_1 = require("../../../inputs/PagesWhereInput");
let DeleteManyPagesArgs = class DeleteManyPagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], DeleteManyPagesArgs.prototype, "where", void 0);
DeleteManyPagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPagesArgs);
exports.DeleteManyPagesArgs = DeleteManyPagesArgs;
