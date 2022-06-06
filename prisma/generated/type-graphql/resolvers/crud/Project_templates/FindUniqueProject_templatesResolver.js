"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProject_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueProject_templatesArgs_1 = require("./args/FindUniqueProject_templatesArgs");
const Project_templates_1 = require("../../../models/Project_templates");
const helpers_1 = require("../../../helpers");
let FindUniqueProject_templatesResolver = class FindUniqueProject_templatesResolver {
    async findUniqueProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_templates_1.Project_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProject_templatesArgs_1.FindUniqueProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProject_templatesResolver.prototype, "findUniqueProject_templates", null);
FindUniqueProject_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], FindUniqueProject_templatesResolver);
exports.FindUniqueProject_templatesResolver = FindUniqueProject_templatesResolver;
