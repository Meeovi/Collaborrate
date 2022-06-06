"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceWhereInput_1 = require("../../../inputs/SourceWhereInput");
let DeleteManySourceArgs = class DeleteManySourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereInput_1.SourceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceWhereInput_1.SourceWhereInput)
], DeleteManySourceArgs.prototype, "where", void 0);
DeleteManySourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySourceArgs);
exports.DeleteManySourceArgs = DeleteManySourceArgs;
