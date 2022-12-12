"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWorkspacesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesWhereUniqueInput_1 = require("../../../inputs/WorkspacesWhereUniqueInput");
let FindUniqueWorkspacesOrThrowArgs = class FindUniqueWorkspacesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput)
], FindUniqueWorkspacesOrThrowArgs.prototype, "where", void 0);
FindUniqueWorkspacesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueWorkspacesOrThrowArgs);
exports.FindUniqueWorkspacesOrThrowArgs = FindUniqueWorkspacesOrThrowArgs;
