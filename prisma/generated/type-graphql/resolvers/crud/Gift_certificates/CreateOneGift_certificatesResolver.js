"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneGift_certificatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneGift_certificatesArgs_1 = require("./args/CreateOneGift_certificatesArgs");
const Gift_certificates_1 = require("../../../models/Gift_certificates");
const helpers_1 = require("../../../helpers");
let CreateOneGift_certificatesResolver = class CreateOneGift_certificatesResolver {
    async createOneGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneGift_certificatesArgs_1.CreateOneGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneGift_certificatesResolver.prototype, "createOneGift_certificates", null);
CreateOneGift_certificatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Gift_certificates_1.Gift_certificates)
], CreateOneGift_certificatesResolver);
exports.CreateOneGift_certificatesResolver = CreateOneGift_certificatesResolver;