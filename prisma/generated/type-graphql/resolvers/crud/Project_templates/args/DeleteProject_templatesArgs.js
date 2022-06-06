"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesWhereUniqueInput_1 = require("../../../inputs/Project_templatesWhereUniqueInput");
let DeleteProject_templatesArgs = class DeleteProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput)
], DeleteProject_templatesArgs.prototype, "where", void 0);
DeleteProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteProject_templatesArgs);
exports.DeleteProject_templatesArgs = DeleteProject_templatesArgs;
