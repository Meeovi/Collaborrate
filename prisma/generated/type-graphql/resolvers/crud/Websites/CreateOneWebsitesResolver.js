"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWebsitesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneWebsitesArgs_1 = require("./args/CreateOneWebsitesArgs");
const Websites_1 = require("../../../models/Websites");
const helpers_1 = require("../../../helpers");
let CreateOneWebsitesResolver = class CreateOneWebsitesResolver {
    async createOneWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Websites_1.Websites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWebsitesArgs_1.CreateOneWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneWebsitesResolver.prototype, "createOneWebsites", null);
CreateOneWebsitesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Websites_1.Websites)
], CreateOneWebsitesResolver);
exports.CreateOneWebsitesResolver = CreateOneWebsitesResolver;
