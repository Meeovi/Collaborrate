"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProject_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyProject_templatesArgs_1 = require("./args/FindManyProject_templatesArgs");
const Project_templates_1 = require("../../../models/Project_templates");
const helpers_1 = require("../../../helpers");
let FindManyProject_templatesResolver = class FindManyProject_templatesResolver {
    async findManyProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Project_templates_1.Project_templates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProject_templatesArgs_1.FindManyProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyProject_templatesResolver.prototype, "findManyProject_templates", null);
FindManyProject_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], FindManyProject_templatesResolver);
exports.FindManyProject_templatesResolver = FindManyProject_templatesResolver;
